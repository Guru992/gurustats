import type { Schema, Attribute } from '@strapi/strapi';

export interface TextImageParaWithImage extends Schema.Component {
  collectionName: 'components_text_image_para_with_images';
  info: {
    displayName: 'Para with image';
    icon: 'book';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    imagev2: Attribute.Media;
  };
}

export interface TextImageTextWithImage extends Schema.Component {
  collectionName: 'components_text_image_text_with_images';
  info: {
    displayName: 'TextWithImage';
    icon: 'command';
  };
  attributes: {
    img: Attribute.Media;
    text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text-image.para-with-image': TextImageParaWithImage;
      'text-image.text-with-image': TextImageTextWithImage;
    }
  }
}
