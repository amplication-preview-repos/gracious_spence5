import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TopicList } from "./topic/TopicList";
import { TopicCreate } from "./topic/TopicCreate";
import { TopicEdit } from "./topic/TopicEdit";
import { TopicShow } from "./topic/TopicShow";
import { SentimentAnalysisList } from "./sentimentAnalysis/SentimentAnalysisList";
import { SentimentAnalysisCreate } from "./sentimentAnalysis/SentimentAnalysisCreate";
import { SentimentAnalysisEdit } from "./sentimentAnalysis/SentimentAnalysisEdit";
import { SentimentAnalysisShow } from "./sentimentAnalysis/SentimentAnalysisShow";
import { NewsArticleList } from "./newsArticle/NewsArticleList";
import { NewsArticleCreate } from "./newsArticle/NewsArticleCreate";
import { NewsArticleEdit } from "./newsArticle/NewsArticleEdit";
import { NewsArticleShow } from "./newsArticle/NewsArticleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NewsSummarizerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Topic"
          list={TopicList}
          edit={TopicEdit}
          create={TopicCreate}
          show={TopicShow}
        />
        <Resource
          name="SentimentAnalysis"
          list={SentimentAnalysisList}
          edit={SentimentAnalysisEdit}
          create={SentimentAnalysisCreate}
          show={SentimentAnalysisShow}
        />
        <Resource
          name="NewsArticle"
          list={NewsArticleList}
          edit={NewsArticleEdit}
          create={NewsArticleCreate}
          show={NewsArticleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
