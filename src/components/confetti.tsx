interface Props {
  markAsDone: boolean;
}

const Confetti = ({ markAsDone }: Props) => {
  return (
    <div>
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className={`confetti-piece ${markAsDone ? 'block' : 'hidden'}`}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export { Confetti };
