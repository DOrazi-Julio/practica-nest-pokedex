import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adaptes/axios.adapter';

@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {}
