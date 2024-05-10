import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalance from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Jishan",
    lastName: "Laskar",
    email: "workwithjishan.info@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions effieciently"
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.43}
          />
        </header>
        recent transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 652.53 }, { currentBalance: 252.22 }]}
      />
    </section>
  );
};
export default Home;
