import clsx from 'clsx';

export const SimpleLoading = ({
  loadingSize = 25,
  loadingColor = '#eee',
  backgroundColor = '#555',
  spinTime = 1.5,
  loadingThickness = 4,
  className,
}: {
  loadingSize?: number;
  loadingColor?: string;
  backgroundColor?: string;
  loadingThickness?: number;
  spinTime?: number;
  className?: string;
}) => {
  return (
    <div className={clsx('flex flex-items-center flex-justify-center', className)}>
      <style>{`
        @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
        }
    `}</style>
      <div
        style={{
          position: 'relative',
          animation: `spin ${spinTime}s linear infinite`,
        }}
      >
        <div
          style={{
            width: loadingSize,
            height: loadingSize,
            borderRadius: '50%',
            border: `${loadingThickness}px solid`,
            borderColor: `${loadingColor} ${backgroundColor} ${backgroundColor} ${backgroundColor}`,
          }}
        />
      </div>
    </div>
  );
};





