import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Principles',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ErgoNation is a community where people are encouraged to not make any compromises on crypto ideals, decentralization and anonymity.
      </>
    ),
  },
  {
    title: 'Join the Next Event',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Join the next monthly ΣID verification event on **July 11th 2022** at 13.00 UTC for instructions. The event itself will start 13.10 UTC, and end 13.30 UTC.
      </>
    ),
  },
  {
    title: 'Join the Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ErgoNation is a community driven project aiming for decentralized development. To participate join our <a href="https://t.me/+jXC4jIej_FdlZjdk">Telegram</a> or <a href="https://discord.gg/xkkXr3Wx">Discord</a>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
