import { Nettruyen } from "./Nettruyen";
import {
    Source,
    SearchRequest,
} from "paperback-extensions-common";
import * as cheerio from 'cheerio';
import { expect } from "chai";

describe("NetTruyen", function () {
    let source: Source;
    let nettruyen: Nettruyen;

    before(async () => {
        source = new Nettruyen(cheerio);
        nettruyen = source as Nettruyen;
    });

    describe("getChapters()", function () {
        it('Get Chapter', async () => {
            const data = await nettruyen.getChapters("60533");
            expect(data, 'Null').to.be.not.empty
            // console.log(data);
        })
    });

    describe("getSearchTags()", function () {
        it('Get Tags', async () => {
            const data = await nettruyen.getSearchTags();
            expect(data, 'Null').to.be.not.empty
            // console.debug(data[0]?.tags);
        })
    });

    describe("getMangaDetails()", function () {
        it('Get Manga Details', async () => {
            const data = await nettruyen.getMangaDetails('/ta-khong-muon-trung-sinh-dau-65017');
            expect(data, 'Null').to.be.not.empty
            // console.debug(data.tags);
        })
    });

    describe("getSearchResults()", function () {
        it('Get Search', async () => {
            var meta = ''
            var query: SearchRequest = {
                title: 'One',
                parameters: {},
                includedTags: [createTag({
                    id: "15",
                    label: ""
                })]
            }
            const data = await nettruyen.getSearchResults(query, meta);
            expect(data, 'Null').to.be.not.empty
            // console.log(data);
        })
    });
});