import {useLottie} from "lottie-react";
import leadboard from "../lottie/files/leadboard.json";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export default function LottieIcon({isActive}) {

    const {View, stop, play} = useLottie({
        loop: false,
        autoPlay: false,
        animationData: leadboard
    }, {
        width: 20, height: 20,
        color: "white"
    })

    stop();

    useEffect(() => {
        if (isActive) {
            play();
        }
    }, [isActive]);


    return (
        <div>
            {View}
        </div>
    );
}