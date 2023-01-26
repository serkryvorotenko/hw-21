import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
    notify: notify,
    plumber: plumber,
    browsersync: browsersync,
    newer:newer,
    if:ifPlugin
}
