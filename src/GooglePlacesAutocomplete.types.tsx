import {LoaderOptions} from '@googlemaps/js-api-loader';
import {OptionTypeBase, Props} from 'react-select';
import {StylesConfig} from "react-select/src/styles";

export type GooglePlacesAutocompleteHandle = {
  getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined;
  refreshSessionToken: () => void;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface AutocompletionRequest {
  bounds?: [LatLng, LatLng];
  componentRestrictions?: { country: string | string[] };
  location?: LatLng;
  offset?: number;
  radius?: number;
  types?: string[];
}

export default interface GooglePlacesAutocompleteProps<
    OptionType extends OptionTypeBase = { label: string; value: string },
    IsMulti extends boolean = false> {
  apiKey?: string;
  apiOptions?: Partial<LoaderOptions>;
  autocompletionRequest?: AutocompletionRequest;
  debounce?: number;
  minLengthAutocomplete?: number;
  onLoadFailed?: (error: Error) => void;
  selectProps?: Props<OptionTypeBase>;
  withSessionToken?: boolean;
  styles?: StylesConfig<OptionType, IsMulti>;
}
