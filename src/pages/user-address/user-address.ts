import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { Geocoder, GeocoderRequest, GeocoderResult } from "@ionic-native/google-maps";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, ILatLng } from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-user-address',
  templateUrl: 'user-address.html',
})
export class UserAddressPage {

  private latitude;
  private longitude;
  public address;
  map1: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,
              private spinner: SpinnerDialog) {
    // this.showAddres();
    this.loadMap1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddressPage');
  }

  showAddres() {
    this.spinner.show('', 'Getting address');
    const geoOptions = {
      enableHighAccuracy: true
    };
    this.geolocation.getCurrentPosition(geoOptions).then(resp => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude + ' ' + this.longitude);

      let options: GeocoderRequest = {
        position: {
          "lat": this.latitude,
          "lng": this.longitude
        }
      };

      Geocoder.geocode(options).then( (results: GeocoderResult[])=> {
          if (results.length == 0){
            return null;
          }
          let address: any = [
            results[0].subThoroughfare || "",
            results[0].thoroughfare || "",
            results[0].locality || "",
            results[0].subLocality || "",
            results[0].subAdminArea|| "",
            results[0].postalCode || "",
            results[0].country || ""].join(", ");

          this.address = address;
          this.spinner.hide();
        }
      );

    }).catch(error => {
      console.log('Error getting location', error.message);
      this.spinner.hide();
    });

  }

  loadMap1() {
    this.spinner.show('', 'Getting address');
    this.map1 = GoogleMaps.create('map_canvas1', {
      camera: {
        target: { "lat": 37.422858, "lng": -122.085065 },
        zoom: 15
      }
    });

    this.spinner.hide();

    this.map1.on(GoogleMapsEvent.MAP_CLICK).subscribe((params:any[]) => {
      let latLng: ILatLng = params[0];
      let marker: Marker = this.map1.addMarkerSync({
        "position": latLng
      });

      // Latitude, longitude -> address
      Geocoder.geocode({
        "position": latLng
      }).then((results: GeocoderResult[]) => {
        if (results.length == 0) {
          // Not found
          return null;
        }
        let address: any = [
          results[0].subThoroughfare || "",
          results[0].thoroughfare || "",
          results[0].locality || "",
          results[0].adminArea || "",
          results[0].postalCode || "",
          results[0].country || ""].join(", ");

        marker.setTitle(address);
        marker.showInfoWindow();
      });
    });

  }

}
