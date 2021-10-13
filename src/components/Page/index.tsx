import Head from 'next/head';
import styles from './Page.module.scss';

export type PageProps = {
    decoration?: boolean,
};

export const Page = ({decoration}: PageProps) => {
    return (
        <div className={styles['page']}>
            <div className={styles['page__content']}>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
                <p>
                    Ligula non arcu taciti faucibus dolor nunc dictum aliquet magna senectus
                    fringilla. Consequat mattis rhoncus netus tempus. Pharetra inceptos metus proin
                    sodales ipsum. Fusce suscipit sodales nisi odio lacus, gravida semper sodales
                    tellus. Eget tempor mus lectus mollis arcu tincidunt sociosqu tellus condimentum
                    et augue justo. Tempus gravida viverra varius malesuada lacinia nam vel massa
                    massa vel massa? Sagittis nisi class vehicula ut vivamus mattis enim.
                </p>
                <p>
                    Eros elit a phasellus phasellus lobortis. Convallis, eu etiam in phasellus
                    adipiscing. Eleifend donec netus posuere. Metus cursus, luctus sapien cras nisl
                    nostra nascetur dolor habitant. Elementum placerat mus euismod ante dapibus.
                    Tempus accumsan fringilla sociis. Amet donec nisl felis feugiat tellus ut tempor
                    class viverra nibh elementum bibendum! Litora urna aliquet facilisi est faucibus
                    hendrerit ridiculus odio ligula fusce.
                </p>
                <p>
                    Consectetur proin suscipit consectetur nisl et maecenas. Faucibus nec commodo
                    facilisi pharetra. Risus aptent sagittis ad torquent praesent habitant
                    ullamcorper fames curae; morbi eu donec! Tellus volutpat imperdiet leo malesuada
                    dictumst. Urna pellentesque consectetur condimentum tortor dui integer tellus
                    condimentum duis cum. Aliquet bibendum auctor; tempus tempus. Suscipit placerat
                    vivamus luctus eleifend eget, congue.
                </p>
                <p>
                    Nam gravida praesent nullam mollis suscipit, orci porta risus amet dignissim
                    vulputate. Fusce donec nisi tortor magna ipsum ad purus egestas sociis
                    consectetur vivamus. Penatibus et congue et dapibus nisi risus volutpat fames!
                    Erat sociosqu consectetur sociosqu sapien morbi fermentum elementum molestie
                    rhoncus phasellus eleifend. Integer pharetra taciti proin vulputate phasellus
                    proin eleifend nibh eleifend lobortis interdum. Ligula elementum tempus eros mi
                    posuere, interdum malesuada class scelerisque per sapien adipiscing. Elit.
                </p>
                <p>
                    Pharetra condimentum litora quisque ridiculus justo platea iaculis nascetur.
                    Eleifend ac dignissim dignissim mus purus justo magna nisl habitasse montes
                    praesent. Dolor magnis ligula malesuada amet luctus. Ante odio litora porta
                    curabitur pellentesque nisl conubia aliquet. Placerat lacus odio porttitor
                    himenaeos dolor class tempus eros condimentum ut gravida. Aliquet cursus nec
                    aptent himenaeos auctor sem nulla dictum sociis platea. Quam curabitur pretium
                    dictum justo tortor mattis lobortis mollis ornare malesuada? Parturient, at
                    facilisis nunc velit sociis nostra habitant. Montes natoque aptent aptent mus
                    eleifend euismod elit!
                </p>
            </div>
        </div>
    );
};
