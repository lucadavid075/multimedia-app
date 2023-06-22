export const Header = () => {
    return (
      <header style={styles.header}>
        <h1 style={styles.headerText}>Lucadavid049-LD's Drive</h1>
        <p style={styles.headerSubText}>A File Manager created by Lucadavid049</p>
      </header>
    );
  }
   
  const styles = {
    header: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px'
    },
    headerText: {
      fontSize: '30px'
    },
    headerSubText: {
      fontSize: '15px'
    }
  }