import React, { Component } from "react";
import LandingMessage from "../common/LandingMessage";
import LinkInfo from "../common/LinkInfo";
import TopRatedBooks from "../books/TopRatedBooks";
import { UserConsumer } from "../contexts/user-context";
import { paths, notifications } from "../../constants/constants";

class Home extends Component {
  render() {
    const { isLoggedIn, username } = this.props;

    return (
      <section className="home">
        <LandingMessage message={notifications.welcomeMsg} username={username}>
          <LinkInfo
            name={paths.storeGoToName}
            path={paths.storePath}
            size="lg"
            className="mt-1"
          />

          {isLoggedIn ? (
            <LinkInfo
              name={notifications.viewOrders}
              path={paths.myOrdersPath}
              size="lg"
              className="mt-1"
            />
          ) : null}
        </LandingMessage>

        <TopRatedBooks />
      </section>
    );
  }
}

const HomeWithContext = props => {
  return (
    <UserConsumer>
      {({ user }) => (
        <Home
          {...props}
          isLoggedIn={user.isLoggedIn}
          username={user.username}
        />
      )}
    </UserConsumer>
  );
};

// export default Home;
export default HomeWithContext;
