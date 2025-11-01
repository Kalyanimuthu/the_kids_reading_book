import BookChatPromo from '../components/BookChatPromo';
import ReadeoStory from '../components/ReadeoStory';
import BookChatLibrary from '../components/BookChatLibrary';

function AboutPage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <ReadeoStory />
      <BookChatLibrary />
      <BookChatPromo />
    </div>
    </>
  );
}

export default AboutPage;
