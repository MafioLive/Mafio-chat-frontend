import React, { useState, useEffect } from "react";

/**
 * This is a React component that displays an image from a blob object using FileReader and useState
 * hook.
 * @param props - props is an object that contains the properties passed to the Image component. It may
 * contain a blob property, which is a binary large object representing an image file. The component
 * uses this blob to create a data URL, which is then used as the source of an img element. The
 * component also expects a
 * @returns The `Image` component is being returned, which renders an `img` element with a `src`
 * attribute set to the `imageSrc` state variable and an `alt` attribute set to the `fileName` prop.
 * The `imageSrc` state variable is updated using the `useEffect` hook when the `props.blob` dependency
 * changes, which reads the blob data using a `FileReader
 */
function Image(props) {

    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsDataURL(props.blob);
        reader.onloadend = function () {
            setImageSrc(reader.result);
        }
    }, [props.blob]);

    return (
        <img style={{ width: 150, height: "auto" }} src={imageSrc} alt={props.fileName} />
    );

};

export default Image;