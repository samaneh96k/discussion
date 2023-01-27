import CommentsPage from "./components/commentsPage/commentsPage";
import CommentProvider from "./context/contextProvider";

function App() {

  return (
   
    <CommentProvider>
      <CommentsPage />
    </CommentProvider>

  );
}

export default App;
