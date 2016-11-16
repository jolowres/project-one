import { GenreService, BandService } from './services/index';
import { Urls } from './constants/urls.constants';

export const APP_PROVIDERS = [
    GenreService,
    BandService,
    Urls
];