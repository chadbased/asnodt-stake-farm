import React from "react";

function IframeSwap() {
    return (
        <div>
            <iframe
                src="https://swap.asnodt.org"
                style={{
                    width: "100%",
                    height: "100vh",
                    "@media (max-width: 768px)": {
                        height: "50vh"
                    }
                }}
            ></iframe>
        </div>
    );
}

export default IframeSwap;