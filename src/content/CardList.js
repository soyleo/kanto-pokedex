import Card from './Card';

const CardList = ({ characters }) => {
    return (
        <div>
            {
                characters.map((char, i) => {
                    return <Card key={i} name={char.name} url={char.url} />
                })
            }
        </div>
    );
}

export default CardList;