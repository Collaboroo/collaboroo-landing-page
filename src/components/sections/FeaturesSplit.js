import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        {/* <div className={innerClasses}> */}
        {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
        <div className={splitClasses}>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Save valuable time
                  </div>
              <h3 className="mt-0 mb-12">
                Pre-Recorded Questions
                  </h3>
              <p className="m-0">
                No more repeating the same questions to each customer. Deliver a single set of questions while preserving the human touch needed in any customer relationship
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/collaboroo/record_ques.svg')}
                alt="Features split 01"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Just One Click
                  </div>
              <h3 className="mt-0 mb-12">
                Asynchronous Management
                  </h3>
              <p className="m-0">
                Disseminate your questions through a link to all your customer profiles. We offer Email, Whatsapp Bot, and Telegram integration.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/collaboroo/one_click.svg')}
                alt="Features split 02"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Qualitative Data
                  </div>
              <h3 className="mt-0 mb-12">
                Open-Ended Responses
                  </h3>
              <p className="m-0">
                Your customers can choose to reply in video, audio, or text. We'll transcribe these responses, and you can watch or listen in up to 2X speed.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/collaboroo/customer_reply.svg')}
                alt="Features split 02"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Understand The Why
                  </div>
              <h3 className="mt-0 mb-12">
                Individual Follow-Up
                  </h3>
              <p className="m-0">
                Not sure what your customer is talking about? Highlight specific content within the trasncripts to follow up with individual customers.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/collaboroo/follow_up.svg')}
                alt="Features split 02"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Easier Consolidation
                  </div>
              <h3 className="mt-0 mb-12">
                Multi Tagging
                  </h3>
              <p className="m-0">
                Tag individual segments of the transcripts to consolidate your customer feedback for later analysis. We also offer Jira integration.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/collaboroo/tagging.svg')}
                alt="Features split 03"
                width={528}
                height={396} />
            </div>
          </div>

        </div>
        {/* </div> */}
      </div>
      <br/>
      <br/>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;