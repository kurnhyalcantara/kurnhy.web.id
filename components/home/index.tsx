import { ProfileCard } from '../cards/profile';
import Container from '../ui/container';
import { Twemoji } from '../ui/twemoji';
import { Greetings } from './greetings';

export function Home() {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greetings />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <div className="mb-6 mt-4 md:mb-8">
              <p>I started coding in 2021 and have loved it ever since.</p>
              <p>
                Working as a Back End Developer at BRI (Bank Rakyat Indonesia).
              </p>
              <p>I enjoy working with Golang, JavaScript, TypeScript</p>
              <p>This blog is where I share what I’ve learned along the way.</p>
            </div>
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="p-4 md:pl-4 md:pt-8 ">
          <ProfileCard />
        </div>
      </div>
    </Container>
  );
}
