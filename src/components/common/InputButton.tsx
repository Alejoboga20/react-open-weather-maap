import { Coordinates } from '../../interfaces/Locations';
import '../../styles/components/InputButton.css';

interface InputButtonProps {
  label: string;
  value: string;
  location: Coordinates;
  onClick: (event: any) => void;
  disabled: boolean;
}

export const InputButton = ({
  label,
  value,
  onClick,
  disabled,
}: InputButtonProps) => (
  <button
    value={value}
    onClick={onClick}
    disabled={disabled}
    className='inputButton'
  >
    {label}
  </button>
);
