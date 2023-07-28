import React, {useState} from 'react';
import styles from './styles.module.scss';

const Box = (props) => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.note}>{props.note}</div>
            {props.type === "0" && <input type="text" placeholder="Enter something..."></input>}
            {props.type === "1" && 
                (
                    <div>
                        <input type="file" className="imageUpload" id="imageUpload" accept=".jpg, .jpeg, .png" onChange={handleImageUpload} />
                        <div id="imagePreview">
                        {image && <img src={image} alt="Uploaded Image" width="300" />}
                        </div>
                    </div>  
                )
            }
        </div>
    )
}

export default Box;