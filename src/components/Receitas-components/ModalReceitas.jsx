import React from 'react';

const ModalReceitas = ({ id="modalRec", onClose= () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <div id={id} className="modalRec" onClick={handleOutsideClick}>
            <div className="modalRecCont">
                <button className="closeRec" onClick={onClose}/>
                <div className="modalConteudo">{children}</div>
            </div>
        </div>
    );
};

export default ModalReceitas;