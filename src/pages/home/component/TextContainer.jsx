// TextContainer.js
import React from "react";
import Button from "../../../components/Shared/Button";

export const TextContainer = ({ isLoggedIn, handleButtonClick }) => (
    <div className="textContainer">
        <h1>مرحبا بك في منصة مستحقاتي</h1>
        <p className="long-text">
            من خلال هذه المنصة نسعى إلى مساعدة أهالي الموصل في معرفة استحقاقهم
            للتعويضات الحكومية بعد الحرب.
            <br />
            إذا كنت قد تعرضت لأضرار في الممتلكات أو إصابات أو خسائر، تتيح لك
            منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول على المساعدة
        </p>
        <Button
            className="google-login-btn"
            onClick={handleButtonClick}
            text={isLoggedIn ? "بدء المحادثة" : "تسجيل الدخول بستخدام"}
        />
    </div>
);
