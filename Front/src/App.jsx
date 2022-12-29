import "./App.css";
import AddMember from "./Component/AddMember.jsx";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import MemberList from "./Component/MemberList.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AddMember />
                <MemberList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
