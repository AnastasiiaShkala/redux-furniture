import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>Select any product category:</h1>
            {['BED', 'CHAIR', 'TABLE', 'CLOSET', 'SOFA', 'ALL'].map(category => <Filter category={category}/>)}
        </div>
    )
}
export default AllCategories;