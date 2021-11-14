import s from './Title.module.css';

function Title({ content }) {
  return <h1 className={s.title}>{content}</h1>;
}

export default Title;
