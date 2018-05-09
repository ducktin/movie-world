import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'overview' })
export class OverviewPipe implements PipeTransform {
    transform(value: string, length: number = 250): string {
        if (value.length === 0) {
            return 'No overview available.';
        }
        let short = this.shorten(value, length);
        if (!short.endsWith('...') && short.length !== value.length) {
            short = short + '...';
        }
        return short;

    }

    shorten(value: string, length: number): string {
        let ret = value;
        while (ret.length > length) {
            var lastIndex = ret.lastIndexOf(" ");
            ret = ret.substring(0, lastIndex);
        }
        return ret;
    }
}

