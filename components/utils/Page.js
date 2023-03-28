import styles from '@/styles/Page.module.scss';

const Page = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Page;
