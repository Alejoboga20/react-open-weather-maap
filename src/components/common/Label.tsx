import '../../styles/components/Label.css';

interface LabelProps {
  labelContent: string;
}

export const Label = ({ labelContent }: LabelProps) => {
  return (
    <div className='label_container'>
      <label className='main_content'>{labelContent}</label>
    </div>
  );
};
