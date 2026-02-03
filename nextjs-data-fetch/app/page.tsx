import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | NestJS Data Fetch',
  description: 'This is my home page.',
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
        accusantium optio! Accusamus blanditiis, explicabo cumque quidem vero
        porro aspernatur voluptatum nam numquam deserunt, nemo fugiat doloribus
        voluptatem quia! Commodi veritatis laboriosam iure ullam aperiam! Vitae
        obcaecati cupiditate, suscipit exercitationem voluptates dignissimos,
        quidem voluptatibus vero provident itaque voluptas molestias. Dolore,
        cum.
      </p>
    </div>
  );
};

export default Home;
