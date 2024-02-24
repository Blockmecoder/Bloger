import Home from "@/components/Home/home";
import styles from "./page.module.css"; 
import NavBar from "@/components/NavBar/page";
import Footer from "@/components/footer/page";
export default function home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Home />      
     <Footer/>
    </main>
  );
}
