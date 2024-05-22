'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getRandomHexColor, postData } from './functions';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2 hours from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login(formData: any) {
  // Verify credentials && get the user
  const response = await postData('http://127.0.0.1:8000/login', formData, undefined);
  console.log('🚀 ~ login ~ data:', response);

  if (response.success) {
    const user = {
      email: response.data.user.email,
      username: response.data.user.username,
      first_name: response.data.user.first_name,
      tasks: response.data.user.tasks,
      token: response.data.token,
      avatar: `https://images.placeholders.dev/?text=${response.data.user.first_name
        .charAt(0)
        .toLocaleUpperCase()}&width=50&height=50&bgColor=${getRandomHexColor()}`,
    };

    console.log('🚀 ~ login ~ user:', user);
    // Create the session
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    cookies().set('session', session, { expires, httpOnly: true });
  }

  return response;
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  console.log('🚀 ~ updateSession ~ session:', session);
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
