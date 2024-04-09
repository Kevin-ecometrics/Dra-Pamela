import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface ImageProps {
  src: string;
  alt: string;
}

interface SliderProps {
  imageOne: ImageProps;
  imageTwo: ImageProps;
}

export const Example: React.FC<SliderProps> = ({ imageOne, imageTwo }) => {
  return (
    <div className="h-full ">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={imageOne.src} alt={imageOne.alt} />
        }
        itemTwo={
          <ReactCompareSliderImage src={imageTwo.src} alt={imageTwo.alt} />
        }
      />
    </div>
  );
};

export default Example;
