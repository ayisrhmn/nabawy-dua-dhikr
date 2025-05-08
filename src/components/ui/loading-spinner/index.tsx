import { cn } from '@/shared/utils';
import { IonSpinner } from '@ionic/react';
import { ClassNameValue } from 'tailwind-merge';

interface LoadingSpinnerProps {
  color?:
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning'
    | string
    | undefined;
  duration?: number | undefined;
  name?:
    | 'bubbles'
    | 'circles'
    | 'circular'
    | 'crescent'
    | 'dots'
    | 'lines'
    | 'lines-sharp'
    | 'lines-sharp-small'
    | 'lines-small'
    | undefined;
  paused?: boolean;
  divClassName?: ClassNameValue;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  name = 'crescent',
  ...props
}: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-center',
        props.divClassName
      )}
    >
      <IonSpinner name={name} {...props} />
    </div>
  );
};

export default LoadingSpinner;
