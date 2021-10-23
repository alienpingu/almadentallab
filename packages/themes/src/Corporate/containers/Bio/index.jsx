import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Button from '@pagerland/common/src/components/Button';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';
import Link from 'next/link'
import data from '../../data';

const Bio = ({
  name,
  title,
  subtitle,
  text,
  img,
  cta,
  WrapperProps,
  ContainerProps,
  ImageWrapperProps,
  ImageProps,
  CaptionProps,
  SubtitleProps,
  TitleProps,
  TextProps,
  CtaProps,
  VideoWrapper,
  VideoTitle
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...ImageWrapperProps}>
        <Fade cascade duration={600}>
          <Img {...ImageProps} {...img} />
        </Fade>
      </Box>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...SubtitleProps}>{subtitle}</Typography>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
    </Container>
    <Container {...VideoWrapper}>
      <Typography {...TitleProps}>Guarda l'intervista</Typography>
        <iframe 
          src="https://player.vimeo.com/video/638058551?h=008eee6285&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen  
          title="VID-20211006-WA0009.mp4"
          style={{
            position:'flex',
            width: '100%',
            height: '100%',
            marginTop:'64px',
            minHeight: '50vh'

          }}
          ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Container>
  </Box>
);

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  ImageProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  img: PropTypes.object,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.object,
  VideoWrapper: PropTypes.object,
  VideoTitle: PropTypes.node,
};

Bio.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ImageProps: {
    maxWidth: '100%',
    pl: 36,
  },
  CaptionProps: {
    mb: 5,
    maxWidth: 544,
  },
  SubtitleProps: {
    as: 'h3',
    variant: 'h5',
    color: 'brand',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'invert',
    mb: {
      _: 4,
      lg: 48,
    },
  },
  TextProps: {
    color: 'text',
    mb: {
      _: 4,
      lg: 48,
    },
  },
  VideoWrapper: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  VideoTitle: 'Lorem Ipsum',
  },
  ...data.bio,
};

export default Bio;
