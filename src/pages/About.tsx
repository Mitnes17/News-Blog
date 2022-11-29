import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  background-color: #fffacd;
  border-radius: 7px;
  padding: 36px;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }
`;

export const About = () => {
  return (
    <Wrap>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti veniam atque sint
        ipsum dolorem iusto ratione libero voluptatem! Doloribus voluptate distinctio ullam officiis
        esse nam corrupti at sequi eos dolorem. Expedita, aliquid? Voluptas itaque possimus unde
        dolorum et repellat! Rem, earum? Dolorum, deserunt rerum eveniet recusandae suscipit a dolor
        enim, dignissimos non earum officiis, quaerat illum porro autem eligendi? Cum ratione quae
        iusto corrupti commodi illo temporibus, labore beatae incidunt ea explicabo officiis magnam
        laboriosam quibusdam vel aut repellat perferendis accusamus veritatis magni a itaque. Dicta
        harum at architecto cupiditate modi pariatur accusamus blanditiis earum exercitationem a,
        molestias vitae?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis veniam, eos aut distinctio
        provident aspernatur! Libero modi nobis nulla esse soluta dolore ullam aperiam est suscipit
        maiores facere ipsa error repellat quo id cumque ad dignissimos natus iure quaerat,
        consectetur culpa quisquam, atque vitae! Veniam, molestias possimus omnis ut dignissimos
        debitis dolores repellat quisquam qui, quo modi saepe quia libero ex nesciunt, consequatur
        voluptate esse nobis officiis molestiae! Illum similique at doloribus iste dolore! Laborum
        suscipit voluptate laboriosam, exercitationem corrupti sequi et maxime nulla tenetur quaerat
        in? Eum aliquid accusantium doloremque? Facere ea quae non voluptatibus in aspernatur
        quisquam maiores.
      </p>
    </Wrap>
  );
};
