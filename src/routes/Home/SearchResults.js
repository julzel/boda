import styles from './SearchResults.module.scss';

const SearchResults = ({ searchResults, searchQuery }) => {
  if (searchQuery.trim() === '') {
    return <p>Busca tu mesa</p>;
  }
  if (searchResults.length === 0) {
    return <p>No hay resultados</p>;
  }
  return (
    <div className={styles.searchResults}>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((mesa) => (
            <li key={mesa.mesa} className={styles.table}>
              <header>
              <h2>Mesa</h2>
                <img src={mesa['img-src']} alt={mesa.mesa} />
              </header>
              <ul>
                {mesa.invitados.map((invitado) => (
                  <li key={invitado.nombre} className={styles.guest}>
                    <span
                      className={`${styles.result} ${
                        invitado.nombre
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        invitado.alias
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                          ? styles.highlighted
                          : ''
                      }`}
                    >
                      {invitado.alias}{' '}
                      <span className={styles.small}> | {invitado.nombre}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SearchResults;
