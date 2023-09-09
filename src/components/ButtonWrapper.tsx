import {useRouter} from "next/router";

const ButtonWrapper = () => {
    const router = useRouter();
    const buttonStyle = {
        padding: 10,
        fontSize: 16,
        marginRight: 20,
    }
    return (
        <div>
            <button style={buttonStyle} onClick={() => router.push('/asset/1')}>asset page</button>
            <button style={buttonStyle} onClick={() => router.push('/index/1')}>index page</button>
            <button style={buttonStyle} onClick={() => router.push('/')}>home page</button>
        </div>
    );
};

export default ButtonWrapper;
