import { InputButton } from '../common/InputButton';
import { Locations } from '../../interfaces/Locations';

export interface PlaceSelectorProps {
  inputButtons: Locations[];
  onClick: (event: any) => void;
  blockButtons: boolean;
}

export const PlaceSelector = ({
  inputButtons,
  onClick,
  blockButtons,
}: PlaceSelectorProps) => {
  return (
    <div className='radio_container'>
      {inputButtons.map(({ label, value, location }) => (
        <InputButton
          key={value}
          label={label}
          value={value}
          location={location}
          onClick={onClick}
          disabled={blockButtons}
        />
      ))}
    </div>
  );
};
