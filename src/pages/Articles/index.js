import React from "react";
import { withAuthentication } from "../../components/Authentication";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import { Container, Item } from "./styles";

const ArticleCreate = ({ authentication }) => {
  if (authentication.loading) {
    return <Loading />;
  }
  return (
    <>
      <Menu auth={authentication.authenticated} />
      <Container>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>8</Item>
        <Item>10</Item>
        <Item>11</Item>
        <Item>12</Item>
      </Container>
    </>
  );
};

// class ArticleCreate extends Component {
//   render() {
//     return (
//       <>
//         <Menu />
//         <Container>
//           <Item>1</Item>
//           <Item>2</Item>
//           <Item>3</Item>
//           <Item>4</Item>
//           <Item>5</Item>
//           <Item>6</Item>
//           <Item>7</Item>
//           <Item>8</Item>
//           <Item>8</Item>
//           <Item>10</Item>
//           <Item>11</Item>
//           <Item>12</Item>
//         </Container>
//       </>
//     );
//   }
// }

export default withAuthentication(ArticleCreate);
