import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String & Attribute.DefaultTo<'#009834'>;
    color_hex: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface SharedBoxWithBackgroundImage extends Schema.Component {
  collectionName: 'components_shared_box_with_background_images';
  info: {
    displayName: 'Box with background image';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Media;
    body: Attribute.RichText;
    content_position: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface SharedIcon extends Schema.Component {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    source: Attribute.Media;
  };
}

export interface SharedInformationBox extends Schema.Component {
  collectionName: 'components_shared_information_boxes';
  info: {
    displayName: 'Information Box';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText;
    actions: Attribute.Component<'basic.button', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedPricePlanBox extends Schema.Component {
  collectionName: 'components_shared_price_plan_boxes';
  info: {
    displayName: 'Price Plan Box';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    gb_amount: Attribute.Decimal & Attribute.Required;
    gb_amount_fup: Attribute.Decimal;
    price: Attribute.Decimal & Attribute.Required;
    action: Attribute.Component<'basic.button'>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.button': BasicButton;
      'shared.box-with-background-image': SharedBoxWithBackgroundImage;
      'shared.icon': SharedIcon;
      'shared.information-box': SharedInformationBox;
      'shared.media': SharedMedia;
      'shared.price-plan-box': SharedPricePlanBox;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
