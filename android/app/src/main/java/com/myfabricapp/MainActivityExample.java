package com.myfabricapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivityExample extends ReactActivity {

    /**
     * Повертає ім'я головного компонента, зареєстрованого з JavaScript.
     * Це використовується для запланованого рендерингу компонента.
     */
    @Override
    protected String getMainComponentName() {
        return "MyFabricApp";
    }

    /**
     * Повертає екземпляр [ReactActivityDelegate]. Ми використовуємо [DefaultReactActivityDelegate],
     * який дозволяє увімкнути нову архітектуру за допомогою одного логічного прапора [fabricEnabled].
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
            this,
            getMainComponentName(),
            DefaultNewArchitectureEntryPoint.getFabricEnabled() // Увімкнення Fabric
        );
    }
}
