import {GALLERY_CONF, GALLERY_IMAGE} from 'ngx-image-gallery';

export const DEMO_GALLERY_CONF_INLINE: GALLERY_CONF = {
  imageOffset: '0px',
  imagePointer: true,
  showDeleteControl: true,
  showCloseControl: true,
  showExtUrlControl: true,
  closeOnEsc: true,
  showImageTitle: true,
  inline: true,
  backdropColor: 'default'
};

export const DEMO_GALLERY_CONF: GALLERY_CONF = {
  imageOffset: '0px',
  showDeleteControl: true,
  showCloseControl: true,
  showImageTitle: true,
  inline: false,
  backdropColor: 'rgba(13,13,14,0.85)'
};
