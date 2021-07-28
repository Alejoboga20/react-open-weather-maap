import '../../styles/components/Label.css';

export interface LabelProps {
  labelContent: string;
}

export const Label = ({ labelContent }: LabelProps) => {
  return (
    <div className='label_container'>
      <label className='main_content'>{labelContent}</label>
    </div>
  );
};
