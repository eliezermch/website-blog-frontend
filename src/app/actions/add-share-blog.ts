// 'use server';

// const URL = 'http://127.0.0.1:8000/api/share-blog/';

// async function AddShareBlog(formData: FormData) {
//   // console.log('🚀 ~ pay ~ formData:', formData.get('file')?.name);

//   try {
//     const data = await fetch(URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Token c12b8f4e7923ace6a2390642d5d7a99b32e8fb3c`,
//       },
//       body: JSON.stringify({
//         description: formData.get('description'),
//         image: formData.get('file')?.name,
//       }),
//     });
//     console.log(data);
//     // revalidatePath('/tasks');s
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// export { AddShareBlog };
