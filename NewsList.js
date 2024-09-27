import Newsitem from "./NewsItem.js";
import InfiniteScroll from 'react-infinite-scroll-component';
const NewsList= function ({articles,fetcharticles,totalResult}) {
    return (
     <section className="news-item font-bold size-70 text-3xl gap-4">
         {/*Put the scroll bar always on the bottom*/}
         <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetcharticles}
//   hasMore={articles.length<totalResult}
  loader={<h4 style={{color:'white'}}>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center',color:'white' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
{articles.map((data)=>(
    <>
   {data.title && data.description &&<Newsitem  articles={data}/>}
                </>
            ))}
</InfiniteScroll>
         {/* {articles.length > 0 ? (
                articles.map((article, index) => (
                    <Newsitem key={index} article={article} />
                ))
            ) : (
                <p>No news articles available</p>
            )} */}
         
     </section>
    );
};
 export default NewsList;