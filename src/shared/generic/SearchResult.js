export const SearchResult = ({ result }) => {
    return (
        <div
            className="search-result"
            onClick={(e) => alert(`Vous avez sélectionné ${result}`)} //Will redirect to function
        >
            {result}
        </div>
    );
};