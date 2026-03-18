import Accordion from 'react-bootstrap/Accordion';

function BasicExample({ evolution_tree, abilities, moves }) {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Evolution Tree</Accordion.Header>
        <Accordion.Body>
          <p>Dane o ewolucjach wymagają dodatkowego połączenia z API (evolution_chain).</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Abilities</Accordion.Header>
        <Accordion.Body>
          {abilities?.length > 0 ? (
            <ul>
              {abilities.map((abilityName, index) => (
                <li key={index} style={{ textTransform: 'capitalize' }}>
                  {abilityName.replace('-', ' ')}
                </li>
              ))}
            </ul>
          ) : (
            <p>Brak danych o umiejętnościach.</p>
          )}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Moves</Accordion.Header>
        <Accordion.Body>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {moves?.length > 0 ? (
              <ul style={{ columns: 2 }}>
                {moves.map((moveName, index) => (
                  <li key={index} style={{ textTransform: 'capitalize' }}>
                    {moveName.replace('-', ' ')}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Brak danych o ruchach.</p>
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;