import { ReviewsList } from "./reviewsList/ReviewsList";
import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";
import { reviews } from "@/data/googleMapsReview";

export const Reviews = async () => {
  return (
    <section className="container py-16 relative h-full ">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px]">
        Наші <span className="text-[#203055]">Відгуки</span>
      </Title>
      <ReviewsList reviews={reviews} />
      <TitleBg>ВІДГУКИ</TitleBg>
    </section>
  );
};
