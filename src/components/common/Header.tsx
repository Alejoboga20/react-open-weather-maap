import '../../styles/components/Header.css';

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle = '' }: HeaderProps) => {
  return (
    <div className='header_container'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
      <hr />
    </div>
  );
};
